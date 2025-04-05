import { useNavigate } from 'react-router-dom';
import "./Sidenavbar.css";

const SideNavBar = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: 'All', value: 'all' },
    { label: 'Mens', value: "men's clothing" },
    { label: 'Womens', value: "women's clothing" },
    { label: 'Jewelery', value: 'jewelery' },
    { label: 'Electronics', value: 'electronics' },
  ];

  return (
    <div className="sidenav-bg position-fixed">
      <ul className="p-4 space-y-2">
        {navItems.map((item) => (
          <li className="side-nav-item" key={item.value}>
            <button
              onClick={() => navigate(`/category/${encodeURIComponent(item.value)}`)}
              className="block w-full text-left rounded hover:bg-primary-200 text-gray-700 font-medium"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavBar;
