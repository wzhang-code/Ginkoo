# Requirements Document

## Introduction

Ginkoo.org是一个留学咨询网站，为学生提供定制化的研究项目建议、竞赛信息查询、大学专业咨询和文书写作辅助四大核心功能。该平台旨在帮助高中生和大学生规划留学申请路径。

## Glossary

- **用户 (User)**: 访问网站的用户，通常是准备留学的学生或家长
- **研究项目 (Research Project)**: 学生为申请大学而开展的个性化研究活动
- **竞赛 (Competition)**: 高中学科类国际竞赛
- **个人陈述 (Personal Statement)**: 留学申请时提交的自述文章
- **CV/简历**: 学生上传的个人履历文件

## Requirements

### Requirement 1: 学生定制化研究项目建议

**User Story:** AS a student planning for overseas study, I want to receive personalized research project suggestions based on my major interest, background, hobbies and habits, so that I can strengthen my application profile.

#### Acceptance Criteria

1. WHEN the user enters target major direction (e.g., Computer Science, Biology, Economics), the system SHALL display an input form with fields for major direction, personal background, hobbies and habits.
2. WHEN the user submits the form with all required information, the system SHALL generate exactly 4 research project suggestions.
3. EACH suggestion SHALL include: project title, project description, required skills, expected outcomes, and recommended timeline.
4. IF the user does not enter a major direction, the system SHALL display an error message prompting for this required field.
5. THE generated suggestions SHALL be relevant to the entered major direction.

### Requirement 2: 竞赛百科书

**User Story:** AS a student preparing for subject competitions, I want to search for competition information by target subject, so that I can understand the competition overview, knowledge scope, past papers and solutions.

#### Acceptance Criteria

1. WHEN the user enters a target subject (e.g., Mathematics, Physics, Chemistry, Biology, Computer Science), the system SHALL display a list of major international high school competitions in that subject.
2. FOR each competition, the system SHALL display: competition name, organizing body, competition format, key dates, eligibility requirements, and knowledge scope.
3. WHEN the user selects a specific competition, the system SHALL display: detailed competition introduction, recommended study materials, past year题目 (if available), and sample solutions (if available).
4. IF the user enters an unsupported subject, the system SHALL display a message indicating no competitions are available for that subject.
5. THE system SHALL support at least 5 main subjects: Mathematics, Physics, Chemistry, Biology, Computer Science.

### Requirement 3: 大学专业咨询

**User Story:** AS a student exploring university majors, I want to search for information about a target major, so that I can understand required high school subjects, typical courses, career paths, relevant companies and research areas.

#### Acceptance Criteria

1. WHEN the user enters a target major (e.g., Computer Science, Engineering, Business, Medicine), the system SHALL display comprehensive major information.
2. THE displayed information SHALL include: required high school subjects, typical university courses (minimum 5 courses), typical employment directions (minimum 3 directions), related well-known companies (minimum 5 companies), and typical research areas (minimum 3 areas).
3. IF the user enters an unrecognized major, the system SHALL display a message indicating the major is not in the database.
4. THE system SHALL support at least 10 common majors for university application.

### Requirement 4: 文书写作辅助

**User Story:** AS a student applying for universities, I want to generate a personalized statement based on my CV, target school, target major and other requirements, so that I can save time in writing my application essay.

#### Acceptance Criteria

1. THE system SHALL provide a file upload feature for CV, accepting PDF or DOCX format.
2. THE user SHALL be able to enter optional target school name.
3. THE user SHALL be required to enter target major.
4. THE user SHALL be able to specify word count range, with default value of 400 words.
5. THE user SHALL be able to enter additional essay requirements (optional).
6. WHEN the user submits all required information (CV uploaded + target major entered), the system SHALL generate a personal statement in English.
7. THE generated personal statement SHALL incorporate content from the uploaded CV.
8. THE word count of generated statement SHALL be within the specified range.
9. IF the CV upload fails, the system SHALL display an error message.
10. IF the target major is not entered, the system SHALL display an error message prompting for this required field.

### Requirement 5: 用户界面通用要求

**User Story:** AS a user of the Ginkoo website, I want to have a clean and intuitive interface, so that I can easily navigate between different modules.

#### Acceptance Criteria

1. THE website SHALL have a navigation menu to access all four modules.
2. EACH module SHALL have its dedicated page with clear input forms.
3. THE website SHALL be responsive and work on both desktop and mobile devices.
4. THE website SHALL display loading indicators while generating content.
5. THE website SHALL have a clean, modern design suitable for education sector.

## Non-Functional Requirements

1. THE system SHALL generate responses within 30 seconds for typical queries.
2. THE website SHALL load within 3 seconds on standard internet connection.
3. THE system SHALL handle file uploads up to 10MB.
