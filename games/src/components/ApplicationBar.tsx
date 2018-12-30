import AppBar from '@material-ui/core/AppBar';
import * as React from 'react';


interface ApplicationBarProps {
    title :string,
}
interface ApplicationBarState {
    title :string,
}

export default class ApplicationBar extends React.Component<ApplicationBarProps,ApplicationBarState> {
    constructor(props: ApplicationBarProps) {
        super(props);
        this.state = {
            title :props.title,
        }
    }

    render() :JSX.Element {
        return (
            <AppBar>
                Appbar
            </AppBar>
        ) 
    }
}

