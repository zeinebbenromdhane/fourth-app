import React from 'react';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)

    }

    render() {
        return <div>

            <h1>{this.props.profile.fullName}</h1>
            <h1>{this.props.profile.profession}</h1>
        </div>;
    }
}



export default Profile;