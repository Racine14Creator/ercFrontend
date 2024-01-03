import { Subscriber } from "../models/models.js"

export const getAll = async (req, res) => {
    const subscribers = await Subscriber.find()
    return res.json({ subscribers })
}

export const post = async (req, res) => {
    const { email } = req.body

    if (email === '' || email === undefined) { res.json("Email is empty") } else {
        Subscriber.findOne({ email })
            .then(sb => {
                if (sb) {
                    res.json({ message: "This email is taken" })
                } else {
                    const newSubscriber = new Subscriber({ email })
                    newSubscriber.save()
                        .then(subscriber => { res.json(subscriber) })
                        .catch(error => console.log(error))
                }
            })
            .catch(error => {
                console.log(error);
                res.json(error)
            })
    }
}

export const getOne = async (req, res) => {
    const Id = req.params.id
    try {
        await Subscriber.findById(Id)
            .then(subscriber => { return res.json(subscriber) })
            .catch(error => console.log(error))
    } catch (error) {
        console.log(error)
    }
}

export const update = async (req, res) => {
    // const { email, id } = req.body
    const filter = { Id: req.params.id }
    const update = { email: req.body.email }

    // const doc = await Subscriber.findOneAndUpdate(filter, update, { returnOriginal: false, new: true })
    // res.json({ doc })
}

export const deleteOne = async (req, res) => {
    const id = req.params.id
    await Subscriber.findByIdAndDelete(id)
        .then(sub => res.json(sub))
        .catch(error => console.log(error))
}
