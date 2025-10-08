import BookList from "./components/BookList";
import BorrowedBooks from "./components/BorrowedBooks";
import MemberHistory from "./components/MemberHistory";
import AuthorStats from "./components/AuthorStats"; 
import Tabs from "./components/common/Tabs";

export default function App() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <Tabs
        tabs={{
          "📚 Book List": <BookList />,
          "📖 Borrowed Books": <BorrowedBooks />,
          "👤 Member History": <MemberHistory />,
          "🖋️ Author Stats": <AuthorStats />, 
        }}
      />
    </div>
  );
}
