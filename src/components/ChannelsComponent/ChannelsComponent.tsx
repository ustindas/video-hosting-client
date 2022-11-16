import React from 'react';
import {ChannelsMenu, Title, Button, HeaderChannelsMenu} from "./channelsStyles";
import {IChannel} from "../../models/channel";
import Channel from "./ChannelComponent/Channel";

interface ChannelsComponentProps{
    channels: IChannel[]
}

const ChannelsComponent = ({channels}:ChannelsComponentProps) => {
    console.log(channels)
    return (
        <ChannelsMenu>
            <HeaderChannelsMenu>
                <Title>Мои каналы</Title>
                <Button>new channel</Button>
            </HeaderChannelsMenu>
            {channels.map(channel =>
                <Channel key={channel.id} channel={channel}/>
            )}
        </ChannelsMenu>
    );
};

export default React.memo(ChannelsComponent);