import React from 'react';
import Appbar from 'muicss/lib/react/appbar';
import { Link } from 'react-router';

const Header = () => {
  return (
    <Appbar className="appbar">
      <table width="100%">
        <tbody>
          <tr style={{ verticalAlign: 'middle' }}>
            <td className="mui--appbar-height">
              <Link to="/">Path</Link>
            </td>
            <td className="mui--appbar-height" style={{ textAlign: 'right' }}>
              <ul className="mui-list--inline mui--text-body2">
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </Appbar>
  );
};

export default Header;
