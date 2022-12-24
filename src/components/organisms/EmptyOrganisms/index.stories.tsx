import { MoleculeOfFourEmptyAtomsRow } from "../../molecules/EmptyMolecules/index.stories";
import EmptyOrganism from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "component/Organisms/EmptyOrganisms",
  component: EmptyOrganism
}

export const EmptyOrganismPlain = () => <EmptyOrganism>Organism</EmptyOrganism>;
export const OrganismOfTwoMolecules = () => (
  <EmptyOrganism className="p-1">
    <MoleculeOfFourEmptyAtomsRow/>
    <MoleculeOfFourEmptyAtomsRow/>
  </EmptyOrganism>
);
