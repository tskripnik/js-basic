const user= {
  name: 'Test',
  surname: 'Testing',
  nickname: 'Education_Master'
};

function greetUser(user, getNameFunc) {
  return `I am happy to see you ${ getNameFunc(user) }`;
}

const getGreetNameByField = (field) => {
  return function(user) {
    return user[field];
  };
};

//wrap in console log to check
greetUser(user, getGreetNameByField('name')); // I am happy to see you Test
greetUser(user, getGreetNameByField('surname')); // I am happy to see you Testing
greetUser(user, getGreetNameByField('nickname')); // I am happy to see you Education_Master