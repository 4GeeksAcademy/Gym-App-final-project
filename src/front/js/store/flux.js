const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			newUserRes: ''
			
		},
		actions: {
			createNewUser: async (newUser) => {
				try {
					const store = getStore()
					setStore({ store: store.newUserRes = "" })
					await fetch(process.env.BACKEND_URL + "/api/singup", {
						method: "POST",
						headers: {
							"Content-type": "application/json"
						},

						body: JSON.stringify(newUser)
					})
						.then((res) => res.json())
						.then((json) => setStore({ store: store.newUserRes = json }))
						console.log(store.newUserRes)



				} catch (error) {
					console.log("getToken function error==", error)
				}

			}
			
			
		}
	};
};

export default getState;
