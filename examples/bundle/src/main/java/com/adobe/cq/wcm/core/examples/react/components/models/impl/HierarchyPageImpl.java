/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
package com.adobe.cq.wcm.core.examples.react.components.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ContainerExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.export.json.SlingModelFilter;
import com.adobe.cq.export.json.hierarchy.type.HierarchyTypes;
import com.adobe.cq.wcm.core.examples.react.components.models.HierarchyPage;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import com.day.cq.wcm.api.TemplatedResource;
import com.day.cq.wcm.api.components.ComponentContext;
import com.day.cq.wcm.api.designer.Style;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.request.RequestParameter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.wrappers.SlingHttpServletRequestWrapper;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.factory.ModelFactory;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import javax.inject.Inject;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

@Model(adaptables = SlingHttpServletRequest.class, adapters = {HierarchyPage.class, ContainerExporter.class}, resourceType = HierarchyPageImpl.RESOURCE_TYPE)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
@JsonSerialize(as = HierarchyPage.class)
public class HierarchyPageImpl implements HierarchyPage {

    /**
     * Resource type of associated with the current implementation
     */
    public static final String RESOURCE_TYPE = "core-components-examples/wcm/react/components/page/react-spacomponents-page";

    /**
     * Request attribute key of the component context
     */
    private static final String COMPONENT_CONTEXT_ATTR = "com.day.cq.wcm.componentcontext";

    /**
     * Request attribute key of the current page
     */
    private static final String CURRENT_PAGE_ATTR = "currentPage";

    /**
     * Request attribute key of the request page entry point
     */
    private static final String HIERARCHY_ENTRY_POINT_PAGE_ATTR = "com.adobe.aem.guides.contrib.core.models.impl.entryPointPage";

    /**
     * Flags the child pages. Optionally available as a request attribute
     */
    private static final String IS_CHILD_PAGE_ATTR = "com.adobe.aem.guides.contrib.core.models.impl.isChildPage";

    /**
     * Is the current model to be considered as a model root
     */
    private static final String PR_IS_ROOT = "isRoot";

    /**
     * Depth of the tree of pages
     */
    private static final String STRUCTURE_DEPTH_PN = "structureDepth";

    /**
     * List of Regexp patterns to filter the exported tree of pages
     */
    private static final String STRUCTURE_PATTERNS_PN = "structurePatterns";

    /**
     * URL extension specific to the Sling Model exporter
     */
    private static final String URL_MODEL_EXTENSION = ".model.json";

    @Self @JsonIgnore
    private SlingHttpServletRequest request;

    @Inject @JsonIgnore
    private ModelFactory modelFactory;

    @Inject @JsonIgnore
    private PageManager pageManager;

    @ScriptVariable
    @JsonIgnore
    private Resource resource;

    @Inject @JsonIgnore
    private SlingModelFilter slingModelFilter;
    
    @JsonIgnore
    private Map<String, ? extends HierarchyPage> childPages = null;
    
    @JsonIgnore
    private Map<String, ComponentExporter> childModels = null;

    @ScriptVariable
    @JsonIgnore
    protected ResourceResolver resolver;

    @ScriptVariable
    @JsonIgnore
    protected com.day.cq.wcm.api.Page currentPage;

    @ScriptVariable
    @JsonIgnore
    protected Style currentStyle;

    @Nullable
    @Override
    public String getExportedHierarchyType() {
        return HierarchyTypes.PAGE;
    }

    @Nonnull
    @Override
    @JsonInclude(JsonInclude.Include.ALWAYS)
    public Map<String, ? extends HierarchyPage> getExportedChildren() {
        if (childPages == null) {
            childPages = getChildPageModels(request, HierarchyPage.class);
        }
        return childPages;
    }

    @Nonnull
    @Override
    public Map<String, ? extends ComponentExporter> getExportedItems() {
        if (childModels == null) {
            childModels = getItemModels(request, ComponentExporter.class);
        }

        return childModels;
    }

    @Nonnull
    @Override
    public String[] getExportedItemsOrder() {
        Map<String, ? extends ComponentExporter> models = getExportedItems();

        if (models.isEmpty()) {
            return ArrayUtils.EMPTY_STRING_ARRAY;
        }

        return models.keySet().toArray(ArrayUtils.EMPTY_STRING_ARRAY);
    }

    @Nonnull
    @Override
    public String getExportedType() throws IllegalStateException {
        Resource contentResource = currentPage.getContentResource();

        if (contentResource == null) {
            throw new IllegalStateException("No page content found: " + currentPage.getPath());
        }

        return contentResource.getResourceType();
    }

    @Nonnull
    private SlingHttpServletRequest getHierarchyServletRequest(@Nonnull SlingHttpServletRequest request, @Nonnull Page hierarchyPage) {
        SlingHttpServletRequest wrapper = new SlingHttpServletRequestWrapper(request);

        ComponentContext componentContext = (ComponentContext) request.getAttribute(COMPONENT_CONTEXT_ATTR);

        // When traversing child pages the currentPage must be updated
        wrapper.setAttribute(COMPONENT_CONTEXT_ATTR, new HierarchyComponentContextWrapper(componentContext, hierarchyPage));
        wrapper.setAttribute(CURRENT_PAGE_ATTR, hierarchyPage);

        return wrapper;
    }

    /**
     * Returns a map (resource name => Sling Model class) of the given resource children's Sling Models that can be adapted to {@link T}.
     *
     * @param slingRequest The current request.
     * @param modelClass  The Sling Model class to be adapted to.
     * @return Returns a map (resource name => Sling Model class) of the given resource children's Sling Models that can be adapted to {@link T}.
     */
    @Nonnull
    private <T> Map<String, T> getItemModels(@Nonnull SlingHttpServletRequest slingRequest,
                                             @Nonnull Class<T> modelClass) {
        Map<String, T> itemWrappers = new LinkedHashMap<>();

        Iterable<Resource> iterable = slingModelFilter.filterChildResources(request.getResource().getChildren());

        if (iterable == null) {
            return itemWrappers;
        }

        for (final Resource child : iterable) {
            itemWrappers.put(child.getName(), modelFactory.getModelFromWrappedRequest(slingRequest, child, modelClass));
        }

        return  itemWrappers;
    }

    /**
     * Returns a flat list of all the child pages of a given page
     *
     * @param page                  - Page from which to extract child pages
     * @param slingRequest          - Request
     * @param structurePatterns     - Patterns to filter child pages
     * @param depth                 - Depth of the traversal
     * @return
     */
    @Nonnull
    private List<Page> getChildPageRecursive(Page page, SlingHttpServletRequest slingRequest, List<Pattern> structurePatterns, int depth) {
        // By default the value is 0 meaning we do not expose child pages
        // If the value is set as a positive number it is going to be exposed until the counter is brought down to 0
        // If the value is set to a negative value all the child pages will be exposed (full traversal tree - aka infinity)
        // Child pages do not expose their respective child pages
        if (page == null || depth == 0 || Boolean.TRUE.equals(slingRequest.getAttribute(IS_CHILD_PAGE_ATTR))) {
            return new ArrayList<>();
        }

        List<Page> pages = new ArrayList<>();
        Iterator<Page> childPagesIterator = page.listChildren();

        if (childPagesIterator == null || !childPagesIterator.hasNext()) {
            return new ArrayList<>();
        }

        // we are about to explore one lower level down the tree
        depth--;

        boolean noPageFilters = structurePatterns.isEmpty();

        while (childPagesIterator.hasNext()) {
            Page childPage = childPagesIterator.next();
            boolean found = noPageFilters;

            for (Pattern pageFilterPattern : structurePatterns) {
                if (pageFilterPattern.matcher(childPage.getPath()).find()) {
                    found = true;
                    break;
                }
            }

            if (!found) {
                continue;
            }

            pages.add(childPage);

            pages.addAll(getChildPageRecursive(childPage, slingRequest, structurePatterns, depth));
        }

        return pages;
    }

    /**
     * Optionally add a child page that is the entry point of a site model request when this child is not added by the root structure configuration
     *
     * @param slingRequest  The current servlet request
     * @param childPages    List of child pages
     */
    private void addAsynchronousChildPage(@Nonnull SlingHttpServletRequest slingRequest, @Nonnull List<Page> childPages) {
        // Child pages are only added to the root page
        if (Boolean.TRUE.equals(slingRequest.getAttribute(IS_CHILD_PAGE_ATTR))) {
            return;
        }

        // Eventually add a child page that is not part page root children of the but is the entry point of the request
        Page entryPointPage = (Page) slingRequest.getAttribute(HIERARCHY_ENTRY_POINT_PAGE_ATTR);

        if (entryPointPage == null) {
            return;
        }

        // Filter the root page
        if (entryPointPage.getPath().equals(currentPage.getPath())) {
            return;
        }

        // Filter duplicates
        if (childPages.contains(entryPointPage)) {
            return;
        }

        childPages.add(entryPointPage);
    }

    @Nonnull
    private <T> Map<String, T> getChildPageModels(@Nonnull SlingHttpServletRequest slingRequest,
                                                  @Nonnull Class<T> modelClass) {

        int pageTreeTraversalDepth = getPageTreeTraversalDepth();

        List<Pattern> pageFilterPatterns = getStructurePatterns(slingRequest);

        // Setting the child page to true to prevent child pages to expose their own child pages
        SlingHttpServletRequest slingRequestWrapper = new SlingHttpServletRequestWrapper(slingRequest);

        Map<String, T> itemWrappers = new LinkedHashMap<>();

        List<Page> childPages = getChildPageRecursive(currentPage, slingRequestWrapper, pageFilterPatterns, pageTreeTraversalDepth);

        addAsynchronousChildPage(slingRequest, childPages);

        // Add a flag to inform the model of the child pages that they are not the root of the tree
        slingRequestWrapper.setAttribute(IS_CHILD_PAGE_ATTR, true);

        for (Page childPage: childPages) {
            Resource childPageContentResource = childPage.getContentResource();

            if (childPageContentResource == null) {
                continue;
            }

            // Try to pass the templated content resource
            TemplatedResource templatedResource = childPageContentResource.adaptTo(TemplatedResource.class);

            if (templatedResource != null) {
                childPageContentResource = templatedResource;
            }

            // TODO: CQ-4245895 - [Content Service][Editable SPA] routing and export based on page URL - use URL instead of path
            itemWrappers.put(childPage.getPath(), modelFactory.getModelFromWrappedRequest(getHierarchyServletRequest(slingRequestWrapper, childPage), childPageContentResource, modelClass));
        }

        return itemWrappers;
    }

    /**
     * Returns the page structure patterns to filter the child pages to be exported.
     * The patterns can either be stored on the template policy of the page or provided as a request parameter
     *
     * @param slingRequest  - Request
     * @return
     */
    @Nonnull
    private List<Pattern> getStructurePatterns(@Nonnull SlingHttpServletRequest slingRequest) {
        RequestParameter pageFilterParameter = slingRequest.getRequestParameter(STRUCTURE_PATTERNS_PN.toLowerCase());

        String rawPageFilters = null;

        if (pageFilterParameter != null) {
            rawPageFilters = pageFilterParameter.getString();
        }

        if (currentStyle != null && StringUtils.isBlank(rawPageFilters)) {
            rawPageFilters = currentStyle.get(STRUCTURE_PATTERNS_PN, String.class);
        }

        if (StringUtils.isBlank(rawPageFilters)) {
            return Collections.emptyList();
        }

        String[] pageFilters = rawPageFilters.split(",");

        List<Pattern> pageFilterPatterns = new ArrayList<>();
        for (String pageFilter : pageFilters) {
            pageFilterPatterns.add(Pattern.compile(pageFilter));
        }

        return pageFilterPatterns;
    }

    /**
     * Returns the first numeric selector. The default value is 0
     *
     * @return
     */
    private int getPageTreeTraversalDepth() {
        Integer pageTreeTraversalDepth = null;

        if (currentStyle != null) {
            pageTreeTraversalDepth = currentStyle.get(STRUCTURE_DEPTH_PN, Integer.class);
        }

        if (pageTreeTraversalDepth == null) {
            return 0;
        }

        return pageTreeTraversalDepth;
    }

    @Nonnull
    @Override
    public String getExportedPath() {
        return currentPage.getPath();
    }

    /**
     * TODO Replace with the core component Utils.getURL function
     *
     * https://git.corp.adobe.com/CQ/aem-core-wcm-components/blob/development/bundles/core/src/main/java/com/adobe/cq/wcm/core/components/internal/Utils.java#L60
     *
     * @param request
     * @param page
     * @return
     */
    private String getURL(@Nonnull SlingHttpServletRequest request, @Nonnull Page page) {
        String vanityURL = page.getVanityUrl();
        return StringUtils.isEmpty(vanityURL) ? request.getContextPath() + page.getPath() + ".html" : request.getContextPath() + vanityURL;
    }

    /**
     * Returns a model URL for the given page
     *
     * @param request
     * @param page
     * @return
     */
    private String getModelUrl(@Nonnull SlingHttpServletRequest request, @Nonnull Page page) {
        String url = getURL(request, page);

        if (StringUtils.isBlank(url)) {
            return null;
        }

        int dotIndex = url.indexOf(".");

        if (dotIndex < 0) {
            dotIndex = url.length();
        }

        return url.substring(0, dotIndex) + URL_MODEL_EXTENSION;
    }

    /**
     * @return Returns the root model of the given page
     */
    public HierarchyPage getRootModel() {
        if (currentStyle != null && currentStyle.containsKey(PR_IS_ROOT)) {
            return this;
        }

        Page rootPage = getRootPage();

        if (rootPage == null) {
            return null;
        }

        request.setAttribute(HIERARCHY_ENTRY_POINT_PAGE_ATTR, currentPage);

        return modelFactory.getModelFromWrappedRequest(getHierarchyServletRequest(request, rootPage), rootPage.getContentResource(), this.getClass());
    }

    /**
     * @return Returns the root (app) page the current page is part of
     */
    @JsonIgnore
    private Page getRootPage() {
        Page page = currentPage;
        boolean isRootModel;
        
        do {
            isRootModel =  page.getContentResource().getResourceType().equalsIgnoreCase("core-components-examples/wcm/react/components/page/react-spacomponents-page/app");
            
            if(!isRootModel){
                page= page.getParent();
            }

        } while(page != null && !isRootModel);

        return page;
    }

    @Nullable
    @Override
    public String getRootUrl() {
        if (currentStyle != null && currentStyle.containsKey(PR_IS_ROOT)) {
            return getModelUrl(request, currentPage);
        }

        Page page = getRootPage();

        if (page != null) {
            return getModelUrl(request, page);
        }

        return null;
    }

    @Nullable
    @Override
    public String getTitle() {
        if (!StringUtils.isBlank(currentPage.getNavigationTitle())) {
            return currentPage.getNavigationTitle();
        }

        if (!StringUtils.isBlank(currentPage.getTitle())) {
            return currentPage.getTitle();
        }

        return currentPage.getPageTitle();
    }
    
    

}
