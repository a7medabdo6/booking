import React from "react";
import Head from "next/head";
import Link from "next/link";

function completed({ completed }) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
        />
      </Head>
      <div className="wrapper">
        <div
          className="sidebar"
          data-color="purple"
          data-background-color="white"
          data-image="../assets/img/sidebar-1.jpg"
        >
          <div className="logo">
            <a
              href="http://www.creative-tim.com"
              className="simple-text logo-normal"
            >
              Creative Tim
            </a>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              <li className="nav-item ">
                <Link href="/dashboard">
                  <a className="nav-link">
                    <i className="material-icons">dashboard</i>
                    <p>Dashboard</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item active">
                <Link href="/completed">
                  <a className="nav-link">
                    <i className="material-icons">person</i>
                    <p>User Profile</p>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-panel">
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="card">
                    <div className="card-header card-header-warning">
                      <h4 className="card-title">Employees Stats</h4>
                      <p className="card-category">
                        New employees on 15th September, 2016
                      </p>
                    </div>
                    <div className="card-body table-responsive">
                      <table className="table table-hover">
                        <thead className="text-warning">
                          <th>ID_Number</th>
                          <th>Name</th>
                          <th>Date</th>
                          <th>Hour</th>
                          <th>Completed</th>
                          <th>Action</th>
                        </thead>
                        <tbody>
                          {completed.map((one) => {
                            return (
                              <tr key={one.id_number}>
                                <td>{one.id_number}</td>
                                <td>{one.name}</td>
                                <td>{one.date}</td>
                                <td>{one.hour}</td>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        checked
                                        onChange={() => submithandler(one._id)}
                                      />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-primary btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-danger btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://booking-app-5.herokuapp.com/api`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  var completed = data.filter(function (item) {
    return item.completed === true;
  });
  return {
    props: { completed }, // will be passed to the page component as props
  };
}
export default completed;
