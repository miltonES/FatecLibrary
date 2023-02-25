import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent, } from 'react-pro-sidebar';
import { FaFolderPlus, FaUserCog, FaRegClock, FaHome, FaGem, FaShieldAlt, FaBook, FaMagnet, FaBold } from 'react-icons/fa';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import sidebarBg from './assets/bg1.jpg';
import { NavLink } from 'react-router-dom';
import { MdCopyright } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const Aside = ({ image, collapsed, toggled, handleToggleSidebar }) => {
  // #084808
  let user = useSelector(store => store.AppReducer.user);
  const logo = '/';


  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      style={{ position: 'fixed' }}
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader style={{ background: '#222d32', height: 70 }}>
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center'
          }}
        >
          {collapsed == true && <span>
            <img src={logo} alt="" height='60' style={{
              height: '60px',
              width: '90%',
              objectFit: 'contain'
            }} />
          </span>}
          {collapsed == false && <i>
            <img className="img-fluid" src={logo} alt="" height="100" style={{ height: '40px' }} />
          </i>}
        </div>
      </SidebarHeader>
      <SidebarContent style={{ background: '#222d32' }}>
        <Menu iconShape="circle">

          <MenuItem icon={<FaGem />}><NavLink exact to="/home/dashboard" activeStyle={{
            fontWeight: "bold",
            color: "white"
          }}>Dashboard</NavLink></MenuItem>

          {/* <MenuItem icon={<FaGem />}> {'Cadastros'}</MenuItem> */}

          {<MenuItem icon={<FaUserCog />}> <NavLink exact to="/home/list" activeStyle={{
            fontWeight: "bold",
            color: "white"
          }}>Usuários</NavLink></MenuItem>}

          {<SubMenu title="Leads" icon={<FaMagnet />}>
            {<MenuItem  > <NavLink exact to="/home/news/list" activeStyle={{
              fontWeight: "bold",
              color: "white"
            }}>NewsLetter</NavLink></MenuItem>}
            {<MenuItem  > <NavLink exact to="/home/user-reports/list" activeStyle={{
              fontWeight: "bold",
              color: "white"
            }}>Denúncias</NavLink></MenuItem>}
            {<MenuItem  > <NavLink exact to="/home/work-with-us/list" activeStyle={{
              fontWeight: "bold",
              color: "white"
            }}>Trabalhe conosco</NavLink></MenuItem>}

          </SubMenu>}

          <SubMenu title="Páginas" icon={<FaHome />}>
            <MenuItem>
              <NavLink exact to="/home/policy-and-terms" activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}>Política e Termos</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to="/home/testimonies" activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}>Depoimentos</NavLink>
            </MenuItem>
          </SubMenu>

          <SubMenu title="Blog" icon={<FaBold />}>
            <MenuItem>
              <NavLink exact to="/home/blog/list" activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}>Posts</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to="/home/blog/tags/list" activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}>Tags</NavLink>
            </MenuItem>
          </SubMenu>

          <MenuItem icon={<FaRegClock />}><NavLink exact to="/home/schedules" activeStyle={{
            fontWeight: "bold",
            color: "white"
          }}>Agenda</NavLink></MenuItem>

          <MenuItem icon={<FaBook />}><NavLink exact to="/home/subjects" activeStyle={{
            fontWeight: "bold",
            color: "white"
          }}>Módulos</NavLink></MenuItem>

          <MenuItem icon={<BsFillJournalBookmarkFill />}><NavLink exact to="/home/ebooks/list" activeStyle={{
            fontWeight: "bold",
            color: "white"
          }}>E-Books</NavLink></MenuItem>

        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center', background: '#222d32' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="http://www.enterscience.com.br"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <span>Copyrights © {new Date().getFullYear()} EnterScience Inc.</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
