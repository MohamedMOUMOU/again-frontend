# **Again: a Solution for Homeless People During the Pandemic**

## **The story of Again:**

Few days before the start of the quarantine in Morocco, we were walking down the street and we saw a homeless guy trying to find food. Going back home, we were wondering what can this guy do if the quarantine get imposed on us, Moroccans. Few days later, that was exactly what happened: we were quarantined. Thinking about that guy we saw the other day, we started brainstorming solutions that we can build as computer science passionates to make him and many others in the same situation as he is find a shelter especially during this tough time when they can be easily infected by the virus, as likely as easily spreading it. After seeing Covidathon, we believed that this is our chance to make our solution reach more people, and to take the first step in making impact.

## **What is Again?**

Again is a solution that aims at securing a shelter for homeless people during the lockdown by matching associations and organizations that deal with homeless people and house donators. 

The solution also creates jobs for people who have lost their jobs by being application reviewers (more details about this below).

To secure shelter for homeless people, the application allows users to create accounts as an association, a house owner, or as an application reviewer. All of the different types of users enter useful information about themselves when registering (details about the registration information required from each type can be found on the demo site):



- **As a house owner:** anyone who possesses a house or multiple houses can donate them via the application by filling a house donating application. The application asks for information about the house/s that the user would like to donate. This information includes the location of the house, the area, but most importantly a document proving that the user owns that house. The purpose of this proof is to reduce the wasted time after matching an association with a user that does not really possess the house. This proof document will be processed by an AI system that will either validate it or not. If the document is validated, it will be available to application reviewers to match it with an association. If not, the donor’s application will be withdrawn. After the donated houses have been matched with an association or more associations (if there are many houses that a lot of associations can use), the contact of the donor is given to the associations so that they coordinate to finalize the donation process.



- **As an association:** after registering in the application, associations can submit applications asking for matching with a donor. An approximate number of homeless people who will benefit from the donation should be specified in the application. It is then the job of application reviewers to review the application and decide on a match with a donor.



- **As an application reviewer:** application reviewers are people recruited through the application in order to review the associations’ applications and match them to house/s donors. To be an application reviewer, one must apply to the job through the website (applications are available in case of need when the amount of applications is too much than ). Applicants must provide their personal information, but most importantly, proof of losing their job because of the pandemic. This proof can be of any kind: a screenshot of an email of firing (the email should be forwarded later to make sure it comes from a recruiter, a document..). This proof of losing a job, plus the first-come, first-served basis, and the description of the need in the application are the factors that the admins are going to rely on when assessing applications. Each application reviewer will get associations’ applications on a weekly basis. Their job is to assess the need for associations and match them with house donors in the same locations. They also have to distribute the houses in an optimal way taking the need and the impact into consideration. Application reviewers get paid from donations to the web application. These donations have nothing to do with the house/s donations, they are monetary donations that can be done through the web application to a specific bank account for this purpose. Anyone can donate including people not registered under any type in the application. More on how application reviewers get paid in the section below.

## **Payment Policy**

Application reviewers will get paid from donations. Since donations are uncontrollable, our team came up with a special solution. Application reviewers will get a token for each application reviewed and thus an association matched with a donor. The value of a token changes on a weekly basis depending on the donations received. Here is a hypothetical scenario: we have 3 application reviewers who have reviewed 10 applications each, this means that each applicant has earned 10 tokens, making 30 tokens in total. The amount of donations received in this week is 300 $, implying that a token is worth 10 $. In this case, each reviewer will receive 100$ for this week. However, this method is not good if the amount of donations for a certain week is very high, let’s suppose that in the same previous scenario, the amount of donations is 30000 $, then a token will be worth 1000$. This also means that an applicant will earn 10000 $ for a single week. This might be not fair for other applicants who will join in coming weeks, and when the donations will be very much lower. To solve this problem, we decided on having a maximum amount that a token cannot exceed, so that if the amount of donations is high, we save it for later weeks.

Going back to our scenario, if we set the maximum worth of a token to be 20$, and having 30 tokens to issue, we will spend 600 $ and save 29400$ for upcoming weeks. 

## **Important Note:**

Before associations submit their applications, they have to agree to some terms and conditions. An important condition is that the associations should engage the beneficiaries in society by making them help either by doing a job, volunteering, or helping other homeless people. The goal of the application is not only find a shelter for these people, but try to engage them in society especially during these tough times when we all have to unite.

## **Helpful hints about running the application in our demo site: http://againproject.herokuapp.com/**

- If the page returns an error message from heroku, just refresh the page and it will work.

- Here are some login credentials for a quick testing of the application:

- - For an association: 

  - - email: tasnimelfallah@gmail.com
    - passsword: Tasnim123

  - For a house/s donator: 

  - - email: [mohamedjalil@gmail.com](mailto:mohamedjalil@gmail.com)
    - password: ayayayay

  - For an application reviewer:

  - - email: [badr@again.com](mailto:badr@again.com)
    - password: Badr123

- Link to the document about using AI in Again: https://docs.google.com/document/d/1RNNpGf3MIhp-lksVtGzXkH7Tb91Ilw4gRw7AJmu27bA/edit?usp=sharing

- The information and metrics shown on our app are fictional.
