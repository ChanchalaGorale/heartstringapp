import * as React from "react";
import renderer from "react-test-renderer";

import { TextElement } from "../TextElement";

it(`renders correctly`, () => {
  const tree = renderer
    .create(<TextElement>Snapshot test!</TextElement>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
