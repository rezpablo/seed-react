import * as React from 'react';

interface MenuBarProps {}
interface MenuBarStateState {}

class MenuBar extends React.Component<MenuBarProps, MenuBarStateState>  {

    constructor(props: MenuBarProps) {
        super(props);
        this.state = { };
    }

    render() {
        return (
            <div>
                <h1>
                    menu
                </h1>
            </div>
    );
    }
}

export default MenuBar;
