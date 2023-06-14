"use client"
import useSWR from "swr"

const page = () => {

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('https://sisback.vercel.app/api/siswa', fetcher);
 
  if (error) return <div>Failed to load</div>;
  if (!data) return <div><button className="btn">
  <span className="loading loading-spinner"></span>
  loading
</button></div>;
  return (
    <div className="overflow-x-auto">
  <table className="table table-pin-rows table-pin-cols overflow-x">
    {/* head */}
    <thead>
      <tr>
        <th>
          Nomor
        </th>
        <th>Name</th>
        <th>Tanggal Lahir</th>
        <th>Kelas</th>
        <th>Jurusan</th>
        <th>Aksi</th>
      </tr>
    </thead>
    <tbody>
    {data.map((item,key) => (
      <tr key={item.id}>
        <th>
          {key+1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{item.nama}</div>
            </div>
          </div>
        </td>
        <td>
          {item.tanggal_lahir.split('T')[0]}
        </td>
        <td>{item.kelas}</td>
        <td>{item.jurusan}</td>
        <th>
          <button className="btn btn-ghost btn-xs">update</button>
          <button className="btn btn-ghost btn-xs">delete</button>
        </th>
      </tr>
    ))}
    </tbody>
    
  </table>
</div>
    
  );
}

export default page