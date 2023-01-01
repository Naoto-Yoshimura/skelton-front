import EmptyAtom from "../../atoms/EmptyAtom/index";
import List from "../../atoms/layouts/List"
import TwoColumnsLayout from "../../atoms/layouts/TwoColumnsLayout/index";
import { MoleculeOfSixEmptyAtomsCol, MoleculeOfFourEmptyAtomsRow } from "../../molecules/EmptyMolecules/index.stories";
import EmptyOrganism from "../../organisms/EmptyOrganisms/index";
import EmptyTemplate from "./index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "component/common/templates/EmptyTemplates",
  component: EmptyTemplate
}

export const EmptyTemplatePlain = () => <EmptyTemplate>Template</EmptyTemplate>;
export const TemplateType1 = () => {
  return(
    <EmptyTemplate className="p-1">
      <TwoColumnsLayout
        header={
          <EmptyOrganism className="p-1">
            <List>
              <EmptyAtom>2カラムレイアウト</EmptyAtom>
              <MoleculeOfFourEmptyAtomsRow/>
            </List>
          </EmptyOrganism>}
        navbar={<MoleculeOfFourEmptyAtomsRow/>}
        sidebar={<EmptyOrganism className="p-1"><MoleculeOfSixEmptyAtomsCol/></EmptyOrganism>}
        footer={<EmptyOrganism className="p-1"><MoleculeOfFourEmptyAtomsRow/></EmptyOrganism>}
      >
        <EmptyOrganism className="h-full">メイン</EmptyOrganism>
      </TwoColumnsLayout>      
    </EmptyTemplate>

  );
}