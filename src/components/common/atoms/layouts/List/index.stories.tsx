import List from ".";
import EmptyAtom from "../../EmptyAtom/index"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "component/common/atoms/layouts/List",
  component: List
}

export const ListPlain = () => (
  <List>
    <EmptyAtom>item1</EmptyAtom>
    <EmptyAtom>item2</EmptyAtom>
    <EmptyAtom>item3</EmptyAtom>
  </List>
);