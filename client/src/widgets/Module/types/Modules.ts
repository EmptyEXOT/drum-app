import {Metronome, MetronomeProps} from "@/widgets/Module/Metronome";
import {FC} from "react";
import {Alphabet, AlphabetProps} from "@/widgets/Module/Alphabet";
import {MetronomeComponent} from "@/widgets/Module/Metronome/ui/Metronome";
import {AlphabetComponent} from "@/widgets/Module/Alphabet/ui/Alphabet";

enum EModule {
    Metronome = 'Metronome',
    Alphabet = 'Alphabet',
}

interface ModuleProps {
    [EModule.Metronome]: MetronomeProps,
    [EModule.Alphabet]: AlphabetProps,
}

export type TModulesMap = {
    [key in EModule]: FC<ModuleProps[key]>
}

export const Modules: TModulesMap = {
    [EModule.Metronome]: Metronome,
    [EModule.Alphabet]: Alphabet,
}

export type ModuleType = MetronomeComponent | AlphabetComponent

const a: ModuleType[] = [Modules.Metronome]