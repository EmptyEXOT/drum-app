import {Metronome, MetronomeProps} from "@/widgets/Module/Metronome";
import {FC} from "react";
import {Alphabet, AlphabetProps} from "@/widgets/Module/Alphabet";
import {MetronomeComponent} from "@/widgets/Module/Metronome/ui/Metronome";
import {AlphabetComponent} from "@/widgets/Module/Alphabet/ui/Alphabet";
import {ControlProps} from "@/shared/ui/Dropdown/Control/Control";
import {Controls, ControlsComponent} from "@/widgets/Module/Controls/ui/Controls";

enum EModule {
    Controls = 'Controls',
    Metronome = 'Metronome',
    Alphabet = 'Alphabet',
}

interface ModuleProps {
    [EModule.Controls]: ControlProps,
    [EModule.Metronome]: MetronomeProps,
    [EModule.Alphabet]: AlphabetProps,
}

export type TModulesMap = {
    [key in EModule]: FC<ModuleProps[key]>
}

export const Modules: TModulesMap = {
    [EModule.Controls]: Controls,
    [EModule.Metronome]: Metronome,
    [EModule.Alphabet]: Alphabet,
}

export type ModuleType = MetronomeComponent | AlphabetComponent | ControlsComponent

const a: ModuleType[] = [Modules.Metronome]