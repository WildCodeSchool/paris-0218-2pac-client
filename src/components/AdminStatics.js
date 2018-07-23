import React from 'react'
import ScrollUp from '../containers/utils/ScrollUp'
import { Link } from '@reach/router'

const AdminStatics = ({ statics }) =>
  <ScrollUp>
    <div id='admin-statics' className='container'>
      {statics.map(s =>
        <div key={s.id} className="admin-data-row">
          <span className="admin-data-title bold">{s.slug}</span>
          <Link className="admin-tool-button ml-2" to={`/admin/statics/edit/${s.id}`}><i className="far fa-edit"></i></Link>
        </div>
      )}
    </div>
  </ScrollUp>

export default AdminStatics
