import React, { FC, createContext, useState, useEffect } from 'react';

export type Pitch = '4_SEAM_FASTBALL' | '2_SEAM_FASTBALL' | 'CURVEBALL' | 'SLIDER' | 'CHANGEUP' | undefined

interface IBaseballContext {
    pitch: Pitch | undefined;
    isRightHandedPitcher: boolean;
    rotationsPerMinute: number;
    handleSetPitcherHand: (isRighHandedPitcher: boolean) => void;
    handleSetPitchType: (pitch: Pitch) => void;
    handleSetRotationsPerMinute: (rotationsPerMinute: number) => void;
}

export const BaseballContext = createContext<IBaseballContext>({
    pitch: undefined,
    isRightHandedPitcher: true,
    rotationsPerMinute: 30,
    handleSetPitcherHand: () => null,
    handleSetPitchType: () => null,
    handleSetRotationsPerMinute: () => null,
});

const BaseballContextProvider: FC = ({children}) => {
    const [pitch, setPitch] = useState<Pitch>();
    const [isRightHandedPitcher, setPitcherHand] = useState<boolean>(true);
    const [rotationsPerMinute, setRotationsPerMinute] =useState<number>(30);
    
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

    const handleSetRotationsPerMinute = (newState: number) => {
        setRotationsPerMinute(newState);
    }

    useEffect(() => {
        setRotationsPerMinute(rotationsPerMinute)
    }, [rotationsPerMinute]);

    const context = {
        pitch,
        isRightHandedPitcher,
        rotationsPerMinute,
        handleSetPitcherHand,
        handleSetPitchType,
        handleSetRotationsPerMinute
    };

    return <BaseballContext.Provider value={context}>{children}</BaseballContext.Provider>
}

export default BaseballContextProvider;