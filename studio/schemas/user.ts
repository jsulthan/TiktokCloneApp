const user = {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'userName',
        title: 'UserName',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: { hotspot: true },
      },
    ],
  };
  
export default user;