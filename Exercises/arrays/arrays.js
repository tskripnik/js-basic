it("error on invalid login", async function () {
        try {
            const resp = await new Users().login(
                "blablab",
                "blablabal"
            );
            throw new Error('Some error!')
        } catch (err) {
            if (err.message == 'Some error!') {
                throw err
            }
            expect(err.statusCode).to.equal(400);
            expect(err.response.body.error).to.equal("not-found");
        }
    })
