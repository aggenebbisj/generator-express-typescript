import * as request from "supertest";
import {app} from "./app";

describe("A suite", () => {
    it("responds to /", (done) => {
        request.agent(app)
        .get("/")
        .expect(200)
        .expect("Hello World!")
        .end(done);
    });

    it("cannot find /unknown", (done) => {
        request.agent(app)
            .get("/unknown")
            .expect(404)
            .end(done);
    });
});
