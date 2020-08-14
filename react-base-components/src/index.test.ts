import * as CoreComponents from "./index";
import * as Types from "./types";
import * as EmptyFunctions from "./isEmptyFunctions";

it('Imports everything property', () => {
    expect(CoreComponents).toBeDefined();
    expect(EmptyFunctions).toBeDefined();
    expect(Types).toBeDefined();
});