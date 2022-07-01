import "./style.css";
// Using the provided emails and template files:
// - Create all the state data you need to make your app work ✅
// - When the app loads, render a list of emails ✅
// - When a user clicks the email - render the page for that single email ✅
// - Once the email has been opened at least once - mark it as read ✅
// - See that search bar? Make it so when a user types something, you only display the emails who's sender's name contains that. (E.g. "nic" should only show Nico's email. "e" should show both Ed's and Government's emails. Take letter case into consideration, too) ✅
// - Try to make it work when inside the single email view as well! i.e. entering a new search term and hitting enter should take you back to the email list view and show only the emails that match the filter. ✅

type Email = {
  from: string;
  header: string;
  content: string;
  emailAddress: string;
  img: string;
  read: boolean;
};
type State = {
  emails: Email[];
  show: "emails" | "details" | "new-email";
  filter: string;
  selectedEmail: Email | null;
};
const state: State = {
  emails: [
    {
      from: "Nico",
      header: "Link to today's video and slides is up!",
      content:
        "Link is up and you know where to find it! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.",
      emailAddress: "nico@email.com",
      img: "assets/nico.JPG",
      read: true,
    },
    {
      from: "Ed",
      header:
        "Congratulations! You have received a free beaver! Your name will now be displayed in the classroom's beaver list!",
      content:
        "Beaver beaver beaver beaver beaver beaver beaver beaver ! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.",
      emailAddress: "ed@email.com",
      img: "assets/ed.JPG",
      read: false,
    },
    {
      from: "Government",
      header: "Time to pay your tax!",
      content:
        "Pay us now! Pay us now! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.",
      emailAddress: "government@email.com",
      img: "assets/gov.jpg",
      read: false,
    },
  ],
  selectedEmail: null,
  show: "emails",
  filter: "",
};
function selectEmail(email: Email) {
  state.selectedEmail = email;
  email.read = true;
}
function deselectEmail() {
  state.selectedEmail = null;
  state.show = "details";
}
function getFilteredEmails() {
  return state.emails.filter(
    (email) =>
      email.content.toLowerCase().includes(state.filter.toLowerCase()) ||
      email.from.toLowerCase().includes(state.filter.toLowerCase()) ||
      email.header.toLowerCase().includes(state.filter.toLowerCase()) ||
      email.emailAddress.toLowerCase().includes(state.filter.toLowerCase())
  );
}
function renderEmailListItem(email: Email, emailListEl: HTMLUListElement) {
  let liEl = document.createElement("li");
  liEl.className = email.read ? "emails-list__item read" : "emails-list__item";
  liEl.addEventListener("click", () => {
    selectEmail(email);
    render();
  });
  let iconSpanEl = document.createElement("span");
  iconSpanEl.className =
    "emails-list__item__read-icon material-symbols-outlined";
  iconSpanEl.textContent = email.read ? "mark_email_read" : "mark_email_unread";
  let imgEl = document.createElement("img");
  imgEl.className = "emails-list__item__image";
  imgEl.src = email.img;
  let pEl = document.createElement("p");
  pEl.className = "emails-list__item__from";
  pEl.textContent = email.from;
  let pEl2 = document.createElement("p");
  pEl2.className = "emails-list__item__content";
  pEl2.textContent = email.content;

  emailListEl.append(liEl);
  liEl.append(iconSpanEl, imgEl, pEl, pEl2);
}

function renderEmailList() {
  let mainEl = document.querySelector("main");
  if (mainEl === null) return;
  mainEl.textContent = "";

  let titleEl = document.createElement("h1");
  titleEl.textContent = "Inbox";
  let emailListEl = document.createElement("ul");
  emailListEl.className = "emails-list";
  let filteredEmails = getFilteredEmails();
  for (let email of filteredEmails) {
    renderEmailListItem(email, emailListEl);
  }

  mainEl.append(titleEl, emailListEl);
}
function renderEmailDetails() {
  let mainEl = document.querySelector("main");
  if (mainEl === null) return;
  mainEl.textContent = "";
  if (state.selectedEmail === null) return;

  let sectionEl = document.createElement("section");
  sectionEl.className = "single-email";

  let backButtonEl = document.createElement("button");
  backButtonEl.className = "single-email__button";
  backButtonEl.textContent = "⬅ Back";
  backButtonEl.addEventListener("click", () => {
    deselectEmail();
    render();
  });
  let divEl = document.createElement("div");
  divEl.className = "single-email__sender-section";
  let imgEl = document.createElement("img");
  imgEl.className = "single-email__image";
  imgEl.src = state.selectedEmail!.img;
  let spanEl = document.createElement("span");
  spanEl.className = "single-email__sender";
  (spanEl.textContent = state.selectedEmail.from),
    state.selectedEmail.emailAddress;
  let titleEl = document.createElement("h1");
  titleEl.className = "single-email__header";
  titleEl.textContent = state.selectedEmail.header;
  let contentEl = document.createElement("p");
  contentEl.className = "single-email__content";
  contentEl.textContent = state.selectedEmail.content;

  sectionEl.append(backButtonEl, divEl, titleEl, contentEl);
  divEl.append(imgEl, spanEl);

  mainEl.append(sectionEl);
}
function render() {
  if (state.selectedEmail === null) renderEmailList();
  else renderEmailDetails();
}

function renderFilter() {
  let inputEl = document.querySelector<HTMLInputElement>(".filter-input");
  if (inputEl) {
    inputEl.addEventListener("keydown", function (event) {
      if (inputEl === null) return;
      if (event.key !== "Enter") return;
      state.filter = inputEl.value;
      state.show = "emails";
      state.selectedEmail = null;
      render();
    });
  }
}

renderFilter();

render();
