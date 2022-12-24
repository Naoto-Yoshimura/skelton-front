import EmptyMolecule from "../../molecules/EmptyMolecules/index";
import EmptyTemplate from ".";
import EmptyAtom from "../../atoms/EmptyAtom/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "component/Templates/EmptyTemplates",
  component: EmptyTemplate
}

export const EmptyTemplatePlain = () => <EmptyTemplate>Template</EmptyTemplate>;
export const TemplateType1 = () => (
    <EmptyTemplate className="p-1 w-screen h-screen">
      <div className="flex flex-col w-full h-full justify-between">
        {/* header */}
        <EmptyMolecule className="p-1 flex flex-row justify-between h-1/7">
          <EmptyAtom className="w-1/4">Header</EmptyAtom>
          <EmptyAtom className="w-1/6">Menu1</EmptyAtom>
          <EmptyAtom className="w-1/6">Menu2</EmptyAtom>
          <EmptyAtom className="w-1/6">Menu3</EmptyAtom>
          <EmptyAtom className="w-1/6">Menu4</EmptyAtom>
        </EmptyMolecule>
        <div className="flex flex-row h-5/6 justify-between">
          {/* sidebar */}
          <EmptyMolecule className="p-1 flex flex-col justify-start w-1/4">
            <EmptyAtom className="h-1/6">SideBar</EmptyAtom>
            <EmptyAtom className="h-1/8">Menu1</EmptyAtom>
            <EmptyAtom className="h-1/8">Menu2</EmptyAtom>
            <EmptyAtom className="h-1/8">Menu3</EmptyAtom>
            <EmptyAtom className="h-1/8">Menu4</EmptyAtom>
            <EmptyAtom className="h-1/8">Menu5</EmptyAtom>
            <EmptyAtom className="h-1/8">Menu6</EmptyAtom>
          </EmptyMolecule>
          {/* body */}
          <EmptyMolecule className="w-3/4 p-3">
            <div className="w-full h-full bg-white">body</div>
          </EmptyMolecule>
        </div>
        {/* footer */}
        <EmptyMolecule className="p-1 flex flex-row justify-between h-1/7">
          <EmptyAtom className="w-1/4">Footer</EmptyAtom>
          <EmptyAtom className="w-1/6">Menu1</EmptyAtom>
          <EmptyAtom className="w-1/6">Menu2</EmptyAtom>
          <EmptyAtom className="w-1/6">Menu3</EmptyAtom>
          <EmptyAtom className="w-1/6">Menu4</EmptyAtom>
        </EmptyMolecule>
      </div>
    </EmptyTemplate>
  
);