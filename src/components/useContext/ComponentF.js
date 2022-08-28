import React from "react";
import { UserContext, ChannelContext } from "../../App";
// we are using older way in this component to show
function ComponentF() {
    return (
        <div>
            {/* To consume a single context  */}
            {/* <UserContext.Consumer>
                {(user) => {
                    return <div> User context value {user}</div>;
                }}
            </UserContext.Consumer> */}

            {/* To consume multiple context */}
            <UserContext.Consumer>
                {(user) => {
                    return (
                        <ChannelContext.Consumer>
                            {(channel) => {
                                return (
                                    <div>
                                        {" "}
                                        User context value :
                                        <strong> {user} </strong> and channel is
                                        : <strong>{channel}</strong>
                                    </div>
                                );
                            }}
                        </ChannelContext.Consumer>
                    );
                }}
            </UserContext.Consumer>
        </div>
    );
}

export default ComponentF;
