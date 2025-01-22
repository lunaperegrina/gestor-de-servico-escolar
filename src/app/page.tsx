import { Button } from "@/components/ui/button"
import { Menu, Plus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <>
      <div className="container flex flex-col mx-auto">
        <Header />
        <Tabs defaultValue="not-started" className="w-full mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="not-started">Não iniciado</TabsTrigger>
            <TabsTrigger value="in-progress">Em progresso</TabsTrigger>
            <TabsTrigger value="completed">Completado</TabsTrigger>
          </TabsList>
          <TabsContent value="not-started">
            <Card>
              <CardHeader>
                <CardTitle>Project</CardTitle>
                <CardDescription>
                  Workstream - Name
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                {/* <Button>Save changes</Button> */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      Ver detalhes
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Adicionar</DialogTitle>
                      <DialogDescription>
                        ss
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        {/* <Input id="name" value="Pedro Duarte" className="col-span-3" /> */}
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Username
                        </Label>
                        {/* <Input id="username" value="@peduarte" className="col-span-3" /> */}
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="in-progress">
            <Card>
              <CardHeader>
                <CardTitle>Project</CardTitle>
                <CardDescription>
                  Workstream - Name
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                {/* <Button>Save changes</Button> */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      Ver detalhes
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Adicionar serviço</DialogTitle>
                      <DialogDescription>
                        Adicione o serviço a ser realizado
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Escola
                        </Label>
                        <Input disabled id="name" value="Pedro Duarte" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Descrição do serviço
                        </Label>
                        <Input disabled id="name" value="Pedro Duarte" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Anexar imagem
                        </Label>
                        <Input disabled id="username" value="@peduarte" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Prioridade
                        </Label>
                        <Select>
                          <SelectTrigger disabled className="w-full col-span-3">
                            <SelectValue placeholder="Selecione a prioridade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Prioridade</SelectLabel>
                              <SelectItem value="low">Baixa</SelectItem>
                              <SelectItem value="medium">Media</SelectItem>
                              <SelectItem value="high">Alta</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Materiais necessários
                        </Label>
                        <Textarea id="username" value="@peduarte" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Serviços necessários
                        </Label>
                        <Textarea id="servicos-necessarios" className="col-span-3" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Atualizar</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

function Header() {
  return (
    <div className="flex flex-row justify-between m-8">
      <Button variant={"ghost"}>
        <Menu className="w-6 h-6" />
      </Button>
      <h1 className="text-xl text-center">Gerenciador de serviços</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Adicionar serviço</DialogTitle>
            <DialogDescription>
              Adicione o serviço a ser realizado
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Escola
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Descrição do serviço
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Anexar imagem
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Prioridade
              </Label>
              <Select>
                <SelectTrigger className="w-full col-span-3">
                  <SelectValue placeholder="Selecione a prioridade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Prioridade</SelectLabel>
                    <SelectItem value="low">Baixa</SelectItem>
                    <SelectItem value="medium">Media</SelectItem>
                    <SelectItem value="high">Alta</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Adicionar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
