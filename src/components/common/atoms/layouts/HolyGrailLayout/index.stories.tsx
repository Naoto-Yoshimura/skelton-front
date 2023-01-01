import HolyGrailLayout from ".";
import EmptyAtom from "../../EmptyAtom/index";
import { MoleculeOfFourEmptyAtomsRow, MoleculeOfSixEmptyAtomsCol } from "../../../molecules/EmptyMolecules/index.stories";
import EmptyOrganism from "../../../organisms/EmptyOrganisms/index";
import List from "../List/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "component/common/atoms/layouts/HolyGrailLayout",
  component: HolyGrailLayout
}

export const HolyGrailLayoutPlain = () => {
  return(
    <HolyGrailLayout
      header={
        <EmptyOrganism className="p-1">
          <List>
            <EmptyAtom>聖杯レイアウト</EmptyAtom>
            <MoleculeOfFourEmptyAtomsRow/>
          </List>
        </EmptyOrganism>}
      navbar={<MoleculeOfFourEmptyAtomsRow/>}
      sidebar={<EmptyOrganism className="p-1"><MoleculeOfSixEmptyAtomsCol/></EmptyOrganism>}
      sub={<EmptyOrganism className="h-full">サブ</EmptyOrganism>} 
      footer={<EmptyOrganism className="p-1"><MoleculeOfFourEmptyAtomsRow/></EmptyOrganism>}
    >
      <EmptyOrganism className="h-full">メイン</EmptyOrganism>
    </HolyGrailLayout>
  );
};

export const HolyGrailLayoutSideBarRight = () => {
  return(
    <HolyGrailLayout
      header={
        <EmptyOrganism className="p-1">
          <List>
            <EmptyAtom>聖杯レイアウト</EmptyAtom>
            <MoleculeOfFourEmptyAtomsRow/>
          </List>
        </EmptyOrganism>}
      navbar={<MoleculeOfFourEmptyAtomsRow/>}
      sidebar={<EmptyOrganism className="p-1"><MoleculeOfSixEmptyAtomsCol/></EmptyOrganism>}
      sub={<EmptyOrganism className="h-full">サブ</EmptyOrganism>}
      footer={<EmptyOrganism className="p-1"><MoleculeOfFourEmptyAtomsRow/></EmptyOrganism>}
      sidebarLeft={false}
    >
      <EmptyOrganism className="h-full">メイン</EmptyOrganism>
    </HolyGrailLayout>
  );
};