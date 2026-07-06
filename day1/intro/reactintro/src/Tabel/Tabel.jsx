import styles from './Tabel.module.css'

const Table = () => {
  return (
    <div className="table-container">
      <h2>User Details</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Story Title</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Yeshwanth</td>
            <td>yeshwanth@gmail.com</td>
            <td>My First Story</td>
            <td>04-07-2026</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Rahul</td>
            <td>rahul@gmail.com</td>
            <td>College Memories</td>
            <td>05-07-2026</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Priya</td>
            <td>priya@gmail.com</td>
            <td>Travel Experience</td>
            <td>06-07-2026</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;