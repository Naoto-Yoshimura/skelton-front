import EmptyAtom from "../../atoms/EmptyAtom/index";
import EmptyMolecule from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "component/Molecules/EmptyMolecules",
  component: EmptyMolecule
}

export const EmptyMoleculePlain = () => <EmptyMolecule>Molecule</EmptyMolecule>;
export const MoleculeOfFourEmptyAtomsRow = () => (
  <EmptyMolecule className="flex flex-row justify-between p-1">
    <EmptyAtom className="w-1/5">Atom1</EmptyAtom>
    <EmptyAtom className="w-1/5">Atom2</EmptyAtom>
    <EmptyAtom className="w-1/5">Atom3</EmptyAtom>
    <EmptyAtom className="w-1/5">Atom4</EmptyAtom>
  </EmptyMolecule>
);
export const MoleculeOfTwoEmptyAtomsCol = () => (
  <EmptyMolecule className="flex flex-col p-1">
    <EmptyAtom>Atom1</EmptyAtom>
    <EmptyAtom>Atom2</EmptyAtom>
  </EmptyMolecule>
);

