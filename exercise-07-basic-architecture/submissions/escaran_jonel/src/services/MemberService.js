import { membersData } from "../data/data";

export const MemberService = {
  getAllMembers() {
    return membersData;
  },

  searchMembers(name) {
    return membersData.filter((m) =>
      m.name.toLowerCase().includes(name.toLowerCase())
    );
  },

  getMemberHistory(id) {
    const member = membersData.find((m) => m.id === id);
    return member ? member.history : [];
  },
};
