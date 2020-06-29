const{generateDiamond} = require("./diamond-kata")
describe("diamond-kata", () => {
    it("should return only A", () => {
        expect(generateDiamond("A")).toBe("A")
    })

    it("should return the diamond for B", () => {
        expect(generateDiamond("B")).toBe("-A-\n"+
                                          "B-B\n"+
                                          "-A-")
    })

    it("should return the diamond for C", () => {
        expect(generateDiamond("C")).toBe("--A--\n"+
                                          "-B-B-\n"+
                                          "C---C\n"+
                                          "-B-B-\n"+
                                          "--A--")
    })

    it("should return the diamond for D", () => {
        expect(generateDiamond("D")).toBe("---A---\n"+
                                          "--B-B--\n"+
                                          "-C---C-\n"+
                                          "D-----D\n"+
                                          "-C---C-\n"+
                                          "--B-B--\n"+
                                          "---A---")
    })
})
