import React from 'react';

import { useState } from 'react';

function ProjectsPage() {


  // JSON data for projects
  const initialProjectsData = [
    {
      id: "1",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "2",
      name: "SAT1 Project",
      dateCreated: "16-7-2023",
      
    },
    {
      id: "3",
      name: "AAT1 Project",
      dateCreated: "16-6-2023",
      
    },
    {
      id: "4",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "4",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "5",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "5",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "6",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "7",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "8",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "9",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "10",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "11",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "12",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "13",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "14",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "15",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "16",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "17",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "18",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "19",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    {
      id: "20",
      name: "AAT1 Project",
      dateCreated: "16-8-2023",
      
    },
    // Add more project objects here as needed
  ];

  const [projectsData, setProjectsData] = useState(initialProjectsData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [sortOrder, setSortOrder] = useState('Ascending');
  const [searchTerm, setSearchTerm] = useState(''); // Default sort order
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(2); // Now this state is dynamic
  
  const [selectedProject, setSelectedProject] = useState(null); // To track which project's collaborators to show

  
  

  // Filter projects based on search term across multiple properties (e.g., name and owner)
  const filteredProjects = searchTerm
    ? projectsData.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.owner.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : projectsData;


const paginate = pageNumber => setCurrentPage(pageNumber);

const pageNumbers = [];
for (let i = 1; i <= Math.ceil(filteredProjects.length / projectsPerPage); i++) {
  pageNumbers.push(i);
}

const indexOfLastProject = currentPage * projectsPerPage;
const indexOfFirstProject = indexOfLastProject - projectsPerPage;
const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

const handleSearchChange = (e) => {
  setSearchTerm(e.target.value);
  setCurrentPage(1); // Reset to first page on search change
};

const handleProjectsPerPageChange = (event) => {
  setProjectsPerPage(Number(event.target.value));
  setCurrentPage(1); // Reset to first page to avoid potential out-of-range page number
};

const handleSort = (key) => {
  let direction = 'ascending';
  if (sortConfig.key === key && sortConfig.direction === 'ascending') {
    direction = 'descending';
  }
  setSortConfig({ key, direction });
  const sortedProjects = [...projectsData].sort((a, b) => {
    if (key === 'status') {
      const statusOrder = { "Completed": 1, "In Progress": 2 };
      return direction === 'ascending' ? statusOrder[a.status] - statusOrder[b.status] : statusOrder[b.status] - statusOrder[a.status];
    } else if (key === 'date') {
      const dateA = new Date(a.dateCreated.split('-').reverse().join('-'));
      const dateB = new Date(b.dateCreated.split('-').reverse().join('-'));
      return direction === 'ascending' ? dateA - dateB : dateB - dateA;
    } else if (key === 'name') {
      return direction === 'ascending' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    }
  });

  setProjectsData(sortedProjects);
};

 


  // Inline style for table cells and table
  const cellStyle = {
    padding: '10px',
    border: 'none'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
    tableLayout: 'fixed',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };
  const paginationButtonStyle = {
    cursor: 'pointer',
    padding: '8px 12px',
    margin: '0 4px',
    border: 'none',
    borderRadius: '50%', // Makes the button circular
    background: '#f0f0f0',
    transition: 'transform 0.3s ease', // Smooth transform effect for hover
  };
  
  const activeButtonStyle = {
    ...paginationButtonStyle, // Inherits the base style
    background: '#007bff',
    color: '#ffffff',
    fontWeight: 'bold',
  };
  
  function createSlug(name) {
    return name.toLowerCase().replace(/\s+/g, '-');
  }
  
  return (
    <>
    <div className="page-content mt-2">
      <h3 style={{width:'337px',height:'48px',top:'31px',left:'29px',fontSize:'20px',fontWeight:'600',lineHeight:'48px'}}>Projects Overview</h3>
      <div className=" d-flex align-items-center mt-4" style={{ width: '100%' }}>
        <input className='form-control me-2' type='search' placeholder='Search for projects..' aria-label="Search"  value={searchTerm}
            onChange={handleSearchChange} />
        <button style={{background:'#4E8FAB',border:'#ccc',height:'33px',borderRadius:'3px'}}>🔍</button>
      </div>
      <div style={{ margin: '20px', overflowX: 'auto' }}>
        <table style={tableStyle}>
          <thead style={{ background: '#f2f2f2', color: '#000', fontSize: '20px' }}>
            <tr>
              <th style={cellStyle} onClick={() => handleSort('name')}>name </th>
              
              <th style={cellStyle} onClick={() => handleSort('date')}>data created </th>
            
            </tr>
          </thead>
          <tbody className='mt-2'>
            {currentProjects.map((project, index) => (
              <tr key={index} className='project-entry'>
                {/* onClick={() => navigate(/projects/${encodeURIComponent(project.name)})}> when percentage is need to present we need to replace the Onclick need to remove the slug line no158 */} 
                <td style={cellStyle} >{project.name}</td>
                
                <td style={cellStyle}>{project.dateCreated}</td>
                
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
    <div className="pagination-controls d-flex justify-content-between align-items-center">
  <div className="projects-per-page-selector">
    <label htmlFor="projectsPerPage">Projects per page:</label>
    <select
      id="projectsPerPage"
      value={projectsPerPage}
      onChange={handleProjectsPerPageChange}
      style={{ marginLeft: '10px' }}
    >
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
  </div>
  <div className="pagination d-flex justify-content-center" style={{ flex: 1 }}>
    {pageNumbers.map(number => (
      <button
        key={number}
        onClick={() => paginate(number)}
        style={currentPage === number ? activeButtonStyle : paginationButtonStyle}
      >
        {number}
      </button>
    ))}
  </div>
</div>
</>
  );
}

export default ProjectsPage;