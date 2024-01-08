LMS Background
----------------------
The LMS project is a responsive and accessible Learning Management System designed to facilitate online education. It utilizes RESTful APIs, React.js, Laravel, and a SQL database to create a comprehensive platform for managing and delivering educational content.

The project caters to four different user roles: teachers, students, teacher assistants, and administrators. Each role has distinct abilities and views within the system.

Teachers have the ability to create and manage courses, upload course materials such as lectures and assignments, and interact with students through discussion boards and messaging features. They can track student progress, grade assignments, and provide feedback.

Students can enroll in courses, access course materials, participate in discussions, submit assignments, and view their grades and progress. They have the ability to interact with teachers and fellow students through various communication channels provided by the LMS.

Teacher Assistants have similar capabilities to teachers but with limited administrative access. They can assist teachers in managing courses, reviewing and grading assignments, and moderating discussions.

Administrators have the highest level of authorization and possess administrative privileges within the LMS. They can manage user accounts, create and configure courses, handle system settings, and generate reports on user activity and course performance.

The LMS project focuses on providing a user-friendly interface, ensuring responsiveness across different devices, and incorporating accessibility features to accommodate users with disabilities.

By leveraging RESTful APIs, React.js, Laravel, and a SQL database, the LMS project aims to streamline the process of online education, enhance student engagement, and facilitate effective communication and collaboration between teachers and students.

**Creator: Yasmeen Almoumani**


**LinkedIn: https://www.linkedin.com/in/yasmeen-almoumani/**


Installation
-----------------------
In order to download follow the steps belows:

Import from Github
-
````
$ git clone https://github.com/yalmoumani/LMS.git
`````

For Laravel
-
````
cd lms

composer install

php artisan migrate

php artisan db:seed
`````

For React
-
`````
cd ..

cd front 

npm install 

npm start
``````
