let currentView = "";
let isCurriculumPage,
  isCourseDetailsPage,
  isLessonsPage,
  isLoginPage,
  isSignUpPage;

const hello = 0;

hello = "dsafjlk";

//EVENT TO HANDLE FIRST/INITIAL RENDERING
document.addEventListener("DOMContentLoaded", () => {
  //GET BOOLEAN VALUES FOR WHAT PAGE YOURE ON
  const isCurriculumPage = document.querySelector(".sj-page-curriculum")
    ? true
    : false;
  const isCourseDetailsPage = document.querySelector(".sj-page-detail")
    ? true
    : false;
  const isLessonsPage = document.querySelector(".sj-page-lesson")
    ? true
    : false;
  const isLoginPage = document.querySelector(".sj-page-login") ? true : false;
  const isSignUpPage = document.querySelector(".sj-page-signup") ? true : false;

  function checkWindowWidth() {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (width <= 991 && !(currentView === "mobile")) {
      console.log("IS SIGN UP PAGE2: ", isSignUpPage);
      if (isCourseDetailsPage) {
        currentView = "mobile";
        //handleResponsiveCourseDetailsPage();
      } else if (isLoginPage || isSignUpPage) {
        console.log(isLoginPage && "LOGIN PAGE");
        console.log(isSignUpPage && "SIGN UP PAGE");

        //handleResponsiveLoginPage();
      }
    } else if (width > 991 && isCourseDetailsPage && currentView === "mobile") {
      currentView = "desktop";
      //desktopCourseDetailsStlyling();
    }
  }
});
