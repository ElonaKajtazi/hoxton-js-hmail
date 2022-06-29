import './style.css'
// Using the provided emails and template files:
// - Create all the state data you need to make your app work
// - When the app loads, render a list of emails
// - When a user clicks the email - render the page for that single email
// - Once the email has been opened at least once - mark it as read
// - See that search bar? Make it so when a user types something, you only display the emails who's sender's name contains that. (E.g. "nic" should only show Nico's email. "e" should show both Ed's and Government's emails. Take letter case into consideration, too)
// - Try to make it work when inside the single email view as well! i.e. entering a new search term and hitting enter should take you back to the email list view and show only the emails that match the filter. 

// Bonus
// - We know enough to add our own features. Let's add buttons to delete email, create new emails, etc 🙂

const state = {
  emails: [
    {
      from: 'Nico',
      header: "Link to today's video and slides is up!",
      content:
        'Link is up and you know where to find it! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'nico@email.com',
      img: 'assets/nico.JPG',
      read: false
    },
    {
      from: 'Ed',
      header:
        "Congratulations! You have received a free beaver! Your name will now be displayed in the classroom's beaver list!",
      content:
        'Beaver beaver beaver beaver beaver beaver beaver beaver ! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'ed@email.com',
      img: 'assets/ed.JPG',
      read: false
    },
    {
      from: 'Government',
      header: 'Time to pay your tax!',
      content:
        'Pay us now! Pay us now! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'government@email.com',
      img: 'assets/gov.jpg',
      read: false
    }
    // feel free to add more emails here
  ]
}
