import { Block } from "expo-ui-kit";
import { FlatList, Skeleton } from "native-base";
import React from "react";

export interface HListSkeletonProps {
    itemWidth: number;
    itemHeight: number;
    textLine: number;
}

export default function HListSkeleton({ itemWidth, itemHeight, textLine }: HListSkeletonProps) {

    const renderContent = () => {
        return <>
            <Block paddingVertical={20} paddingRight={20}>
                <Skeleton width={itemWidth} height={itemHeight} borderRadius={10} />
                <Skeleton.Text lines={textLine} marginTop={5} />
            </Block>
        </>
    }

    return (
        <FlatList horizontal renderItem={() => renderContent()} data={[1, 2, 3, 4]} />
    );
}

