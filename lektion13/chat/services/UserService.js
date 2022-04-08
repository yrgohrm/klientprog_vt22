const UserService = {
  async getUsers() {
    // should obviously call an actual web service instead
    return [
      { name: "bosse",  online: true },
      { name: "lena",   online: false },
      { name: "nisse",  online: true },
      { name: "leyla",  online: false },
      { name: "anders", online: true },
      { name: "anna",   online: true },
    ];
  },
};
Object.freeze(UserService);

export default UserService;
