import TwoColumnsLayout from ".";
import EmptyAtom from "../../EmptyAtom/index";
import { MoleculeOfFourEmptyAtomsRow, MoleculeOfSixEmptyAtomsCol } from "../../../molecules/EmptyMolecules/index.stories";
import EmptyOrganism from "../../../organisms/EmptyOrganisms/index";
import List from "../List/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "component/common/atoms/layouts/TwoColumnsLayout",
  component: TwoColumnsLayout
}

export const TwoColumnsLayoutPlain = () => {
  return(
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
  );
};

export const TwoColumnsLayoutSideBarRight = () => {
  return(
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
      sidebarLeft={false}
    >
      <EmptyOrganism className="h-full">メイン</EmptyOrganism>
    </TwoColumnsLayout>
  );
};