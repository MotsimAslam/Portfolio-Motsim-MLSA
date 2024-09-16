/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Dive into Visualization with Seaborn: Iris Flower Dataset 🎉",
    description:
      "This project leverages the Seaborn library to visualize the Iris flower dataset, demonstrating the power of data visualization in simplifying analysis and uncovering insights.Seaborn, a versatile and user-friendly Python library, is used to create aesthetically appealing and informative statistical graphics. The project focuses on exploring the relationships between the features of the Iris dataset, such as sepal length, sepal width, petal length, and petal width, across the three different species. By utilizing Seaborn's rich visualization capabilities, this project offers a clear and engaging way to understand the structure and distribution of the data, making it a valuable tool for data scientists and analysts alike.",
    url: "https://github.com/MotsimAslam/Data-Science-Projects-Notebooks/blob/main/dive-into-visulization-with-seaborn-library-iris-flower.ipynb",
  },
  {
    title: "Loan Approval Prediction Using RandomForestClassifier: A Machine Learning Approach",
    description:
      "This project focuses on loan prediction analysis using the RandomForestClassifier, a powerful machine learning algorithm known for its accuracy and robustness. The goal of the project is to predict whether loan applicants will be approved for a loan based on various factors such as income, credit history, and loan amount. By leveraging the ensemble learning capabilities of RandomForest, the project creates a model that combines multiple decision trees to enhance prediction accuracy. This approach not only helps in managing overfitting but also improves the reliability of the model. The analysis provides valuable insights for financial institutions to streamline the loan approval process while minimizing risk.",
    url: "https://github.com/MotsimAslam/Data-Science-Projects-Notebooks/blob/main/loan-prediction-analysis-randomforestclassifier.ipynb",
  },
  {
    title: "Survival Prediction on the Titanic: A RandomForestClassifier Approach",
    description:
      "This project applies the RandomForestClassifier to the famous Titanic dataset in order to predict passenger survival. By analyzing various factors such as age, gender, class, and family size, the model aims to classify whether a passenger would have survived the disaster. RandomForest, an ensemble learning method, combines multiple decision trees to improve prediction accuracy and reduce overfitting. The project highlights how machine learning techniques can be used to gain insights into historical events and offers a practical approach to binary classification problems.",
    url: "https://github.com/MotsimAslam/Data-Science-Projects-Notebooks/blob/main/titanic-basic-random-forest-technique.ipynb",
  },
  {
    title: "Unraveling Insights into Heart Failure: A Data Analysis Approach",
    description:
      "This project dives into the analysis of heart failure data to uncover key patterns and insights that can aid in understanding and predicting patient outcomes. By examining various clinical factors such as age, blood pressure, ejection fraction, and other health metrics, the analysis aims to identify important correlations and risk indicators. Through effective data visualization and machine learning techniques, this project sheds light on the factors contributing to heart failure, offering a valuable resource for healthcare professionals and researchers in improving patient care and preventive strategies.",
    url: "https://github.com/MotsimAslam/Data-Science-Projects-Notebooks/blob/main/unraveling-insights-into-heart-failure.ipynb",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
