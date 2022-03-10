import React, { FC, createContext, useState, useEffect } from 'react';

export type Pitch = '4_SEAM_FASTBALL' | '2_SEAM_FASTBALL' | 'CURVEBALL' | 'SLIDER' | 'CHANGEUP' | undefined

interface IBaseballContext {
    pitch: Pitch | undefined;
    isRightHandedPitcher: boolean;
    rotationsPerSecond: number;
    handleSetPitcherHand: (isRighHandedPitcher: boolean) => void;
    handleSetPitchType: (pitch: Pitch) => void;
    handleSetRotationsPerSecond: (rotationsPerSecond: number) => void;
}

export const BaseballContext = createContext<IBaseballContext>({
    pitch: undefined,
    isRightHandedPitcher: true,
    rotationsPerSecond: 30,
    handleSetPitcherHand: () => null,
    handleSetPitchType: () => null,
    handleSetRotationsPerSecond: () => null,
});

const BaseballContextProvider: FC = ({children}) => {
    const [pitch, setPitch] = useState<Pitch>();
    const [isRightHandedPitcher, setPitcherHand] = useState<boolean>(true);
    const [rotationsPerSecond, setRotationsPerSecond] =useState<number>(30);
    
    const handleSetPitchType = (newState: Pitch) => {
        setPitch(newState);
    }

    useEffect(() => {
        setPitch(pitch);
    }, [pitch]);

    const handleSetPitcherHand = (newState: boolean) => {
        setPitcherHand(newState);
    }

    useEffect(() => {
        setPitcherHand(isRightHandedPitcher);
    }, [isRightHandedPitcher]);

    const handleSetRotationsPerSecond = (newState: number) => {
        setRotationsPerSecond(newState);
    }

    useEffect(() => {
        setRotationsPerSecond(rotationsPerSecond)
    }, [rotationsPerSecond]);

    const context = {
        pitch,
        isRightHandedPitcher,
        rotationsPerSecond,
        handleSetPitcherHand,
        handleSetPitchType,
        handleSetRotationsPerSecond
    };

    return <BaseballContext.Provider value={context}>{children}</BaseballContext.Provider>
}

export default BaseballContextProvider;