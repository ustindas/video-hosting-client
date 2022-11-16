import React from 'react';
import {IChannel} from "../../../models/channel";
import {ChannelCard, ChannelAvatar, ChannelName} from "../channelsStyles"

interface ChannelProps{
    channel: IChannel
}

const Channel = ({channel}: ChannelProps) => {
    return (
        <ChannelCard>
            <ChannelAvatar/>
            <ChannelName>{channel.name}</ChannelName>
        </ChannelCard>
    );
};

export default Channel;