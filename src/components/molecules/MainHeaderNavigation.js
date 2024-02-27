// Built-In Imports
import React from 'react'
import { NavLink } from 'react-router-dom';

// Local Imports
import {mainMenuLinks} from '../../data'


function MainHeaderNavigation() {
  return (
        <ul 
            className="flex items-center justify-between
                w-100
                pv1-00 
                blue0 ttu "
        >
            {
                mainMenuLinks.map
                (( menulink ) =>
                    { const {id, url, text} = menulink;
                        return (
                            <li key={id}
                                className="mb0-00" 
                                tabIndex="0" 
                                title={text} 
                                aria-label={text}
                            >
                                <NavLink to={url} 
                                    className="gold"
                                >
                                    {text}
                                </NavLink>
                            </li>
                        )
                    }
                )
            }
        </ul>
    )
}

export default MainHeaderNavigation
