import EmptyAtom from "../../atoms/EmptyAtom/index";
import EmptyMolecule from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "component/common/molecules/EmptyMolecules",
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

export const MoleculeOfSixEmptyAtomsCol = () => {
  return(
    <EmptyMolecule className="p-1 flex flex-col justify-start w-full">
      <EmptyAtom className="h-1/8">Menu1</EmptyAtom>
      <EmptyAtom className="h-1/8">Menu2</EmptyAtom>
      <EmptyAtom className="h-1/8">Menu3</EmptyAtom>
      <EmptyAtom className="h-1/8">Menu4</EmptyAtom>
      <EmptyAtom className="h-1/8">Menu5</EmptyAtom>
      <EmptyAtom className="h-1/8">Menu6</EmptyAtom>
    </EmptyMolecule>
  );
}

