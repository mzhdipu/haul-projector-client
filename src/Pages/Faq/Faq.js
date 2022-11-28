import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="w-2/3 m-auto my-40">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box text-left"
      >
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <div>
            <p>
              The Four Kinds of React State to Manage When we talk about state
              in our applications, its important to be clear about what types
              of state actually matter.
            </p>
            <p>
              There are four main types of state you need to properly manage in
              your React apps:
            </p>
            <p>Local state</p>
            <p>Global state</p>
            <p>Server state</p>
            <p>URL state</p>
          </div>
        </div>
      </div>

      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box text-left"
      >
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <div>
            <p>Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.</p>
            <p>Prerequisites.</p>
            <p>Prerequisites
Understanding JavaScript functions, familiarity with JavaScript basics (see First steps and Building blocks), and OOJS basics (see Introduction to objects).</p>
            <p>Objective</p>
            <p>To understand JavaScript object prototypes, how prototype chains work, and how to set the prototype of an object.</p>
          </div>
        </div>
      </div>

      <div
        tabIndex={2}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box text-left"
      >
        <div className="collapse-title text-xl font-medium">
        What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content">
          <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.</p>
          <p>Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
</p>
          <p>Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.</p>
        </div>
      </div>

      <div
        tabIndex={3}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box text-left"
      >
        <div className="collapse-title text-xl font-medium">
        React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content">
          <div>
            <p>Angular vs React</p>
            <p>If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.</p>
            <p>React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.</p>
            <p>React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.
</p>
<hr />
<p>React vs Vue</p>
<p>The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.</p>
<p>Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.
</p>
<p>Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.
</p>
<hr />
<p>Angular vs Vue</p>
<p>In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.</p>
<p>A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.
</p>
<p>It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
