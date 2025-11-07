export default function Dashboard() {
  const stats = [
    { label: 'Total Users', value: '2,543' },
    { label: 'Active Projects', value: '48' },
    { label: 'Revenue', value: '$54,290' },
    { label: 'Growth', value: '+12.5%' },
  ]

  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', joined: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active', joined: '2024-02-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'pending', joined: '2024-03-10' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Manager', status: 'active', joined: '2024-01-28' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'inactive', joined: '2024-02-05' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', role: 'Admin', status: 'active', joined: '2024-03-15' },
    { id: 7, name: 'Ethan Hunt', email: 'ethan@example.com', role: 'User', status: 'active', joined: '2024-04-01' },
    { id: 8, name: 'Fiona Green', email: 'fiona@example.com', role: 'User', status: 'pending', joined: '2024-04-12' },
  ]

  return (
    <div className="dashboard">
      <div className="header">
        <h1>Dashboard</h1>
        <p>Overview of your metrics and user data</p>
      </div>

      <div className="stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.label}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="table-container">
        <div className="table-header">
          <h2>User Management</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.role}</td>
                <td>
                  <span className={`status ${row.status}`}>
                    {row.status}
                  </span>
                </td>
                <td>{row.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
