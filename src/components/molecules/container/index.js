import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "@apollo/react-components";

import "./../../../style/MainContainer/style.scss";
import Card from "./../../atoms/LandingPage/cardCourseList";
import ImageNull from "./../../../assets/img/null.png";

const PUBLIC_COURSE = gql`
  query {
    courses(orderBy: createdAt_DESC) {
      id
      title
      cover
      description
    }
  }
`;

export default class MainContainer extends Component {
  render() {
    return (
      <>
        <Query query={PUBLIC_COURSE}>
          {({ data, loading, error }) => {
            return (
              <div
                className="main-container"
                style={{ minHeight: window.innerHeight }}
              >
                {data
                  ? data.courses.map((course) => {
                      return (
                        <Card
                          key={course.id}
                          title={course.title}
                          img={course.cover === null ? ImageNull : course.cover}
                        />
                      );
                    })
                  : null}
              </div>
            );
          }}
        </Query>
      </>
    );
  }
}
