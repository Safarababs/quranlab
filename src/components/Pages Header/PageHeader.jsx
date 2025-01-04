import React from "react";

const PageHeader = ({ title, breadcrumbItems }) => {
  return (
    <div className="container-fluid bg-primary py-5 mb-5 page-header">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h1 className="display-3 text-white animated slideInDown">
              {title}
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                {breadcrumbItems.map((item, index) => (
                  <li
                    key={index}
                    className={`breadcrumb-item ${
                      item.active ? "text-white active" : "text-white"
                    }`}
                    aria-current={item.active ? "page" : undefined}
                  >
                    {item.link ? (
                      <a className="text-white" href={item.link}>
                        {item.label}
                      </a>
                    ) : (
                      item.label
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
